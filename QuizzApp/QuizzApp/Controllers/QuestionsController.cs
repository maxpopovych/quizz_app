using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    /// <summary>
    /// Question controller class
    /// </summary>
    [ApiController]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        ApplicationContext db;
        /// <summary>
        /// Class constructor
        /// </summary>
        /// <param name="context"></param>
        public QuestionsController(ApplicationContext context)
        {
            db = context;
        }
        /// <summary>
        /// Get questions by test id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("test/{id}")]
        public IEnumerable<Question> GetFromTest(int id)
        {
            return db.Questions.Where(x => x.TestId == id).ToList();
        }
        /// <summary>
        /// Get question by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public Question Get(int id)
        {
            Question Question = db.Questions.FirstOrDefault(x => x.Id == id);
            return Question;
        }
        /// <summary>
        /// Add new question
        /// </summary>
        /// <param name="Question"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPost]
        public IActionResult Post(Question Question)
        {
            if (ModelState.IsValid)
            {
                db.Questions.Add(Question);
                db.SaveChanges();
                return Ok(Question);
            }
            return BadRequest(ModelState);
        }
        /// <summary>
        /// Edit(update) question
        /// </summary>
        /// <param name="Question"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        public IActionResult Put(Question Question)
        {
            if (ModelState.IsValid)
            {
                db.Update(Question);
                db.SaveChanges();
                return Ok(Question);
            }
            return BadRequest(ModelState);
        }
        /// <summary>
        /// Delete question by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Question Question = db.Questions.FirstOrDefault(x => x.Id == id);
            if (Question != null)
            {
                db.Questions.Remove(Question);
                db.SaveChanges();
            }
            return Ok(Question);
        }

    }
}
