using System;

namespace QuizzApp.Models
{
    /// <summary>
    /// Test model
    /// </summary>
    public class Test
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Test name
        /// </summary>
        public string Name { get; set; }

#nullable enable
        /// <summary>
        /// Interviewee name
        /// </summary>
        public string? IntervieweeName { get; set; }

        /// <summary>
        /// Number of runs
        /// null = infinite
        /// </summary>
        public int? NumberOfRuns { get; set; }
#nullable disable

        /// <summary>
        /// Test start date
        /// </summary>
        public DateTime StartDate { get; set; }

        /// <summary>
        /// Test close date
        /// </summary>
        public DateTime EndDate { get; set; }
    }
}
