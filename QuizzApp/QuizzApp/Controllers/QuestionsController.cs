using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    [ApiController]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        ApplicationContext db;
        public QuestionsController(ApplicationContext context)
        {
            db = context;
        }
        //questions by test id
        [HttpGet("test/{id}")]
        public IEnumerable<Question> GetFromTest(int id)
        {
            return db.Questions.Where(x => x.TestId == id).ToList();
        }
        //question by id
        [HttpGet("{id}")]
        public Question Get(int id)
        {
            Question Question = db.Questions.FirstOrDefault(x => x.Id == id);
            return Question;
        }

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
