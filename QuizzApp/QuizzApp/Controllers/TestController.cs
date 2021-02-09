using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    [ApiController]
    [Route("api/tests")]
    
    public class TestController : Controller
    {
        ApplicationContext db;
        public TestController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Test> Get()
        {
            return db.Tests.ToList();
        }

        [HttpGet("{id}")]
        public Test Get(int id)
        {
            Test Test = db.Tests.FirstOrDefault(x => x.Id == id);
            return Test;
        }

        [Authorize]
        [HttpPost]
        public IActionResult Post( Test Test)
        {
            if (ModelState.IsValid)
            {
                db.Tests.Add(Test);
                db.SaveChanges();
                return Ok(Test);
            }
            return BadRequest(ModelState);
        }

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
