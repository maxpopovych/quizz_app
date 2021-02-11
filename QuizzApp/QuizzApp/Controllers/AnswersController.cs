using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    /// <summary>
    /// Answer controller class
    /// </summary>
    [ApiController]
    [Route("api/Answers")]
    public class AnswersController : Controller
    {
        private readonly ApplicationContext db;

        /// <summary>
        /// Constructor for this class
        /// </summary>
        /// <param name="context"></param>
        public AnswersController(ApplicationContext context)
        {
            db = context;
        }

        /// <summary>
        /// Return answer by question id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("question/{id}")]
        public IEnumerable<Answer> GetFromQuestion(int id)
        {
            return db.Answers.Where(x => x.QuestionId == id).ToList();
        }

        /// <summary>
        /// Return answer by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public Answer Get(int id)
        {
            Answer Answer = db.Answers.FirstOrDefault(x => x.Id == id);
            return Answer;
        }

        /// <summary>
        /// Add new answer
        /// </summary>
        /// <param name="Answer"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPost]
        public IActionResult Post(Answer Answer)
        {
            if (ModelState.IsValid)
            {
                db.Answers.Add(Answer);
                db.SaveChanges();
                return Ok(Answer);
            }

            return BadRequest(ModelState);
        }

        /// <summary>
        /// Edit(update) answer
        /// </summary>
        /// <param name="Answer"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        public IActionResult Put(Answer Answer)
        {
            if (ModelState.IsValid)
            {
                db.Update(Answer);
                db.SaveChanges();
                return Ok(Answer);
            }

            return BadRequest(ModelState);
        }

        /// <summary>
        /// Delete answer by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Answer Answer = db.Answers.FirstOrDefault(x => x.Id == id);
            if (Answer != null)
            {
                db.Answers.Remove(Answer);
                db.SaveChanges();
            }

            return Ok(Answer);
        }

    }
}
