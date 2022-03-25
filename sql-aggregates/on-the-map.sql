select  "c"."name" as "countryName",
        count("cities".*) as "totalCities"
from    "countries" as "c"
join    "cities" using ("countryId")
group by "c"."countryId";
