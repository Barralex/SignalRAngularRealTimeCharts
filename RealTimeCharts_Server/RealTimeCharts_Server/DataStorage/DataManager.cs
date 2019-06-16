using RealTimeCharts_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealTimeCharts_Server.DataStorage
{
    public class DataManager
    {
        public static List<ChartModel> GetData()
        {
            var randomObj = new Random();
            return new List<ChartModel>()
        {
           new ChartModel { Data = new List<int> { randomObj.Next(1, 40) }, Label = "Data1" },
           new ChartModel { Data = new List<int> { randomObj.Next(1, 40) }, Label = "Data2" },
           new ChartModel { Data = new List<int> { randomObj.Next(1, 40) }, Label = "Data3" },
           new ChartModel { Data = new List<int> { randomObj.Next(1, 40) }, Label = "Data4" }
        };
        }
    }
}
