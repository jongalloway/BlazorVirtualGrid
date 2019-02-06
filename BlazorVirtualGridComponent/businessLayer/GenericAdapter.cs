﻿using BlazorVirtualGridComponent.classes;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace BlazorVirtualGridComponent.businessLayer
{
    public class GenericAdapter<T> where T : class
    {

        public BvgGrid Convert(List<T> GenericList, string Name)
        {

            BvgGrid result = new BvgGrid
            {
                IsReady = true,
                Name = Name,
            };

            PropertyInfo[] Props = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (PropertyInfo prop in Props)
            {
               
                var t = (prop.PropertyType.IsGenericType && prop.PropertyType.GetGenericTypeDefinition() == typeof(Nullable<>) ? Nullable.GetUnderlyingType(prop.PropertyType) : prop.PropertyType);
              
                BvgColumn col = new BvgColumn
                {
                    ID = result.Columns.Count + 1,
                    Name = prop.Name,
                    type = t,
                    SequenceNumber = result.Columns.Count + 1,
                };

                result.Columns.Add(col);



            }

            foreach (T item in GenericList)
            {

                BvgRow row = new BvgRow
                {
                    ID = result.Rows.Count + 1,
                };

                foreach (PropertyInfo p in Props)
                {
                    BvgCell cell = new BvgCell
                    {

                        Value = p.GetValue(item, null),
                        bvgRow = row,
                        bvgColumn = result.Columns.Single(x => x.Name.Equals(p.Name, StringComparison.InvariantCultureIgnoreCase)),
                    };

                    row.Cells.Add(cell);
                }

                result.Rows.Add(row);
            }

            return result;
        }

     

    }
}