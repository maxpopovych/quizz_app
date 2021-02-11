using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    /// <summary>
    /// Test controller
    /// </summary>
    [ApiController]
    [Route("api/tests")]

    public class TestController : Controller
    {
        ApplicationContext db;
        /// <summary>
        /// Class constructor
        /// </summary>
        /// <param name="context"></param>
        public TestController(ApplicationContext context)
        {
            db = context;
        }
        /// <summary>
        /// Get all tests
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Test> Get()
        {
            return db.Tests.ToList();
        }
        /// <summary>
        /// Get test by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public Test Get(int id)
        {
            Test Test = db.Tests.FirstOrDefault(x => x.Id == id);
            return Test;
        }
        /// <summary>
        /// Add test
        /// </summary>
        /// <param name="Test"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPost]
        public IActionResult Post(Test Test)
        {
            if (ModelState.IsValid)
            {
                db.Tests.Add(Test);
                db.SaveChanges();
                return Ok(Test);
            }
            return BadRequest(ModelState);
        }
        /// <summary>
        /// Edit(update) test 
        /// </summary>
        /// <param name="Test"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        public IActionResult Put(Test Test)
        {
            if (ModelState.IsValid)
            {
                db.Update(Test);
                db.SaveChanges();
                return Ok(Test);
            }
            return BadRequest(ModelState);
        }
        /// <summary>
        /// Delete test by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Test Test = db.Tests.FirstOrDefault(x => x.Id == id);
            if (Test != null)
            {
                db.Tests.Remove(Test);
                db.SaveChanges();
            }
            return Ok(Test);
        }

    }
}
