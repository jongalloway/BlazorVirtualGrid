﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorVirtualGridComponent.classes
{
    public class BvgStyle
    {

        public string OutlineColor { get; set; } = "blue";
        public string BorderColor { get; set; } = "black";
        public string BackgroundColor { get; set; } = "white";
        public string ForeColor { get; set; } = "blue";
        public sbyte BorderWidth { get; set; } = 1;

        public sbyte OutlineWidth { get; set; } = 2;
    }
}
