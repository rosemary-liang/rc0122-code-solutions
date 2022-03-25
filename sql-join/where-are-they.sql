select "a"."line1" as "line1",
      "c"."name" as "cityName",
      "a"."district" as "ditrict",
       "countries"."name" as "countryName"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" using ("countryId");
