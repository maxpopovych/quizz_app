using System;
using System.Collections.Generic;
using NUnit.Framework;
using QuizzApp.Models;
using QuizzApp.Controllers;

namespace QuizzApp.Test
{
    public class AcessTestControllerTest
    {
        [Test]
        public void StartTestOkResponse()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var tommorow = DateTime.Today.AddDays(-1);
                var yesterday = DateTime.Today.AddDays(1);
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = tommorow,
                    EndDate = yesterday
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
            }
            using (var controller = new AccessTestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var code = (Microsoft.AspNetCore.Mvc.OkResult)controller.StartTest(100);
                Assert.AreEqual(200, code.StatusCode);
            }
        }

        [Test]
        public void StartTestOkResponseWithNullNumberOfRun()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var tommorow = DateTime.Today.AddDays(-1);
                var yesterday = DateTime.Today.AddDays(1);
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = null,
                    StartDate = tommorow,
                    EndDate = yesterday
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
            }
            using (var controller = new AccessTestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var code = (Microsoft.AspNetCore.Mvc.OkResult)controller.StartTest(100);
                Assert.AreEqual(200, code.StatusCode);
            }
        }

        [Test]
        public void StartTestBadResponseWithWrongDate()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var yesterday = DateTime.Today.AddDays(1);
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = yesterday,
                    EndDate = yesterday
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
            }
            using (var controller = new AccessTestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var code = (Microsoft.AspNetCore.Mvc.BadRequestResult)controller.StartTest(100);
                Assert.AreEqual(400, code.StatusCode);
            }
        }

        [Test]
        public void StartTestBadResponseWithWrongNumberOfRun()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var tommorow = DateTime.Today.AddDays(-1);
                var yesterday = DateTime.Today.AddDays(1);
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 0,
                    StartDate = tommorow,
                    EndDate = yesterday
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
            }
            using (var controller = new AccessTestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var code = (Microsoft.AspNetCore.Mvc.BadRequestResult)controller.StartTest(100);
                Assert.AreEqual(400, code.StatusCode);
            }
        }

        [Test]
        public void EndtTestOkResponse()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var tommorow = DateTime.Today.AddDays(-1);
                var yesterday = DateTime.Today.AddDays(1);
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = tommorow,
                    EndDate = yesterday
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
            }
            using (var controller = new AccessTestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var code = (Microsoft.AspNetCore.Mvc.OkResult)controller.EndTest(100);
                Assert.AreEqual(200, code.StatusCode);
            }
        }

        [Test]
        public void EndTestBadResponse()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var tommorow = DateTime.Today.AddDays(-1);
                var yesterday = DateTime.Today.AddDays(1);
                var test = new Models.Test()
                {
                    Id = 100,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = tommorow,
                    EndDate = tommorow
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
            }
            using (var controller = new AccessTestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var code = (Microsoft.AspNetCore.Mvc.BadRequestResult)controller.EndTest(100);
                Assert.AreEqual(400, code.StatusCode);
            }
        }
    }
}
