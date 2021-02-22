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
        private readonly ApplicationContext db;

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
            Microsoft.EntityFrameworkCore.DbSet<Result> result = db.Results;
            return result;
        }

        /// <summary>
        /// Get result by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet("{id}")]
        public IEnumerable<Result> Get(int id)
        {
            IQueryable<Result> result = db.Results.Where(x => x.Id == id).DefaultIfEmpty();
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
            IQueryable<UserChoice> result = db.UserChoices.Where(x => x.ResultId == id).DefaultIfEmpty();
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
                Result res = new Result { IntervieweeName = result.Name, TestId = Int32.Parse(result.TestId), Score = 0 };
                db.Results.Add(res);
                db.SaveChanges();
                int score = 0;
                foreach (KeyValuePair<string, string> ans in result.Answers)
                {
                    UserChoice userchoise = new UserChoice { ResultId = res.Id, QuestionId = db.Questions.FirstOrDefault(x => x.Text == ans.Key).Id, AnswerId = db.Answers.FirstOrDefault(x => x.Test == ans.Value).Id };
                    db.UserChoices.Add(userchoise);
                    if (db.Answers.FirstOrDefault(x => x.Test == ans.Value).isTrue)
                    {
                        ++score;
                    }

                }
                res.Score = score;
                db.Results.Update(res);
                db.SaveChanges();
                return Ok(result);
            }

            return BadRequest(ModelState);
        }

    }
}
