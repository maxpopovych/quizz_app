using System;
using System.Collections.Generic;
using NUnit.Framework;
using QuizzApp.Models;
using QuizzApp.Controllers;
using System.Linq;

namespace QuizzApp.Test
{
    public class TestControllerTest
    {

        [Test]
        public void Post()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(test);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(test);
                }
                Assert.AreEqual(controller.Get(100), test);
            }
        }

        [Test]
        public void GetById()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(test);
                }
                catch(System.ArgumentException)
                {
                    controller.Post(test);
                }
                Assert.AreEqual(controller.Get(100), test);
            }
        }

        [Test]
        public void Put()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(test);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(test);
                }
                test.Name = "upd";
                controller.Put(test);
                Assert.AreEqual(controller.Get(100), test);
            }
        }

        [Test]
        public void Delete()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now
                };
                try
                {
                    controller.Delete(100);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(test);
                    controller.Delete(100);
                }
                Assert.IsNull(controller.Get(100));
            }
        }


        [Test]
        public void Get()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now
                };
                try
                {
                    controller.Post(test);
                }
                catch (System.ArgumentException)
                {
                }
                Assert.AreEqual(controller.Get().First(), new List<Models.Test>() { test }.First());
            }
        }
    }
}
