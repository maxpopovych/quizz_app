﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class Result
    {
        public int Id { get; set; }
#nullable enable
        public string? intervieweeName { get; set; }
#nullable disable
        public int TestId { get; set; }
        public int score { get; set; }
    }
}
