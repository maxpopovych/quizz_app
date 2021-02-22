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
        public void StartTest_Ok_Response()
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
        public void StartTest_Ok_Response_with_null_numberOfRun()
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
        public void StartTest_Bad_Response_with_wrong_date()
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
        public void StartTest_Bad_Response_with_wron_numberOfRun()
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
        public void EndtTest_Ok_Response()
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
        public void EndtTest_Bad_Response()
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
