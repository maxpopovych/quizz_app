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
        public string name { get; set; }
#nullable enable
        /// <summary>
        /// Interviewee name
        /// </summary>
        public string? intervieweeName { get; set; }
        /// <summary>
        /// Number of runs
        /// null = infinite
        /// </summary>
        public int? numberOfRuns { get; set; }
#nullable disable
        /// <summary>
        /// Test start date
        /// </summary>
        public DateTime startDate { get; set; }
        /// <summary>
        /// Test close date
        /// </summary>
        public DateTime endDate { get; set; }
    }
}
