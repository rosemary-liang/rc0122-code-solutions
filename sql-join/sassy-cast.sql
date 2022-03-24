select  "a"."firstName" as "actorFirstName",
        "a"."lastName" as "actorLastName"
from    "actors" as "a"
join    "castMembers" as "c" using ("actorId")
join    "films" as "f" using ("filmId")
where   "f"."title" = 'Jersey Sassy';
