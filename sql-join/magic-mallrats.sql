select  "c"."firstName" as "customerFirstName",
        "c"."lastName" as "customerLastName"
from "customers" as "c"
join "rentals" as "r" using ("customerId")
join "inventory" as "i" using ("inventoryId")
join "films" as "f" using ("filmId")
where "f"."title" = 'Magic Mallrats';
