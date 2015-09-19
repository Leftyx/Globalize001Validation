using Globalize001Validation.Infrastructure;
using System.Web;
using System.Web.Mvc;

namespace Globalize001Validation
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new LanguageFilterAttribute()); 
        }
    }
}
