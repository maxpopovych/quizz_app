using System;

namespace QuizzApp.Models
{
    public class Test
    {
        public int Id { get; set; }
        public string name { get; set; }
#nullable enable
        public string? intervieweeName { get; set; }
        public int? numberOfRuns { get; set; }
#nullable disable
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
}
