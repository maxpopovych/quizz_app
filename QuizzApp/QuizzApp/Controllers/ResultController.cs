using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    /// <summary>
    /// Result controller class
    /// Providing getting a result for admins
    /// </summary>
    [ApiController]
    [Route("test")]
    public class ResultController : Controller
    {
        ApplicationContext db;
        /// <summary>
        /// Class constructor
        /// </summary>
        /// <param name="context"></param>
        public ResultController(ApplicationContext context)
        {
            db = context;
        }
        /// <summary>
        /// Get all results
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        public IEnumerable<Result> Get()
        {
            var result = db.Results;
            return result;
        }
        /// <summary>
        /// Get result by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            var result = db.Results.FirstOrDefault(x => x.Id == id);
            return result;
        }
        /// <summary>
        /// Get all user choices from result by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet("user/{id}")]
        public IEnumerable<UserChoice> GetUserChoiseByResultId(int id)
        {
            var result = db.UserChoices.Where(x => x.ResultId == id).DefaultIfEmpty();
            return result;
        }
        /// <summary>
        /// Add result
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(SetResultRequest result)
        {
            if (ModelState.IsValid)
            {
                var res = new Result { intervieweeName = result.Name, TestId = result.TestId, score = 0 };
                db.Results.Add(res);
                db.SaveChanges();
                int score = 0;
                foreach (var ans in result.Answres)
                {
                    var userchoise = new UserChoice { ResultId = res.Id, QuestionId = Int32.Parse(ans.Key), AnswerId = ans.Value };
                    db.UserChoices.Add(userchoise);
                    if (db.Answers.FirstOrDefault(x => x.Id == ans.Value).isTrue)
                        ++score;
                }
                res.score = score;
                db.Results.Update(res);
                db.SaveChanges();
                return Ok(result);
            }
            return BadRequest(ModelState);
        }
    }
}
