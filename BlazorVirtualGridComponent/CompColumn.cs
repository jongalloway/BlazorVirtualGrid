﻿using BlazorVirtualGridComponent.classes;
using Microsoft.AspNetCore.Blazor;
using Microsoft.AspNetCore.Blazor.Components;
using Microsoft.AspNetCore.Blazor.RenderTree;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorVirtualGridComponent
{
    public class CompColumn : BlazorComponent, IDisposable
    {
        [Parameter]
        protected BlazorComponent parent { get; set; }


        [Parameter]
        public BvgColumn bvgColumn { get; set; }

        public CompGrid _parent;

        protected override void OnInit()
        {
            _parent = parent as CompGrid;
        }

        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {

            int k = -1;

            builder.OpenElement(k++, "th");

            builder.AddAttribute(k++, "style",bvgColumn.GetStyle());
            builder.AddAttribute(k++, "onclick", Clicked);
            
            builder.AddContent(k++, bvgColumn.Name);
            
            
            //builder.AddElementReferenceCapture(k++, (elementReference) =>
            //{

            //    Elementreferences_Dictionary.Add(_value_id, elementReference);

            //});


            builder.CloseElement(); //th


            base.BuildRenderTree(builder);
        }


        public void Clicked(UIMouseEventArgs e)
        {
            Console.WriteLine("invoked click");
            CompGrid a = parent as CompGrid;
            a._parent.bvgGrid.SelectColumn(bvgColumn);
            
        }





        public void Refresh()
        {
            StateHasChanged();
        }


        public void Dispose()
        {

        }
    }
}
