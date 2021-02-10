using System.Collections.Generic;

namespace QuizzApp.Models
{
    public class SetResultRequest
    {
        public int TestId { get; set; }
        public string Name { get; set; }
        public Dictionary<string, int> Answres { get; set; }

    }
}
