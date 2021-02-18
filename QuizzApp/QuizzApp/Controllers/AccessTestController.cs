using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    /// <summary>
    /// Access test controller class
    /// Provides check is it possible to pass test
    /// </summary>
    [ApiController]
    [Route("api/access")]
    public class AccessTestController : Controller
    {
        private readonly ApplicationContext db;

        /// <summary>
        /// Constructor for this class
        /// </summary>
        /// <param name="context"></param>
        public AccessTestController(ApplicationContext context)
        {
            db = context;
        }

        /// <summary>
        /// Send to start test
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("start/{id}")]
        public IActionResult StartTest(int id)
        {
            if(CanStartTest(id))
            {
                var test = db.Tests.First(x => x.Id == id);
                test.NumberOfRuns--;
                db.Update(test);
                db.SaveChanges();
                return Ok();
            }

            return BadRequest();
        }

        /// <summary>
        /// Send to end test
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("end/{id}")]
        public IActionResult EndTest(int id)
        {
            if (CanEndTest(id))
            {
                return Ok();
            }

            return BadRequest();
        }

        private bool CanStartTest(int id)
        {
            var test = db.Tests.First(x => x.Id == id);
            var curDate = DateTime.Now;
            if (DateTime.Compare(test.StartDate,curDate) < 0)
            {
                if (test.NumberOfRuns == null)
                {
                    return true;
                }
                else if(test.NumberOfRuns > 0)
                {
                    return true;
                }

            }

            return false;
        }

        private bool CanEndTest(int id)
        {
            var test = db.Tests.First(x=> x.Id == id);
            var curDate = DateTime.Now;
            if (DateTime.Compare(curDate,test.EndDate)<0)
            {
                return true;
            }

            return false;
        }
    }
}
