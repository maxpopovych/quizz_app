using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    [ApiController]
    [Route("api/Answers")]
    public class AnswersController : Controller
    {
        ApplicationContext db;
        public AnswersController(ApplicationContext context)
        {
            db = context;
        }
        //answer by question id
        [HttpGet("question/{id}")]
        public IEnumerable<Answer> GetFromQuestion(int id)
        {
            return db.Answers.Where(x => x.QuestionId == id).ToList();
        }
        //answer by id
        [HttpGet("{id}")]
        public Answer Get(int id)
        {
            Answer Answer = db.Answers.FirstOrDefault(x => x.Id == id);
            return Answer;
        }

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
