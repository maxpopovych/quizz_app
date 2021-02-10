using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    [ApiController]
    [Route("test")]
    public class ResultController : Controller
    {
        ApplicationContext db;
        public ResultController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost]
        public IActionResult Post(SetResultRequest result)
        {
            if (ModelState.IsValid)
            {
                var res = new Result { intervieweeName = result.Name, TestId = result.TestId, score = 0 };
                db.Results.Add(res);
                db.SaveChanges();
                foreach (var ans in result.Answres)
                {
                    var userchoise = new UserChoice { ResultId = res.Id,QuestionId = Int32.Parse(ans.Key),AnswerId = ans.Value};
                    db.UserChoices.Add(userchoise);
                }
                
                db.SaveChanges();
                return Ok(result);
            }
            return BadRequest(ModelState);
        }
    }
}
