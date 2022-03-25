select "c"."firstName" as "customerFirstName",
        "c"."lastName" as "customerLastName",
        sum("p"."amount") as "totalAmountPaid"
from  "payments" as "p"
join  "customers" as "c" using ("customerId")
group by "c"."firstName", "c"."lastName"
order by sum("p"."amount") desc;
