using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class SetResultRequest
    {
        public int TestId { get; set; }
        public string Name { get; set; }
        public Dictionary<string,int> Answres { get; set; }

    }
}
