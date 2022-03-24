select  "f"."releaseYear" as "releaseYear",
        "g"."name" as "genreName"
from    "films" as "f"
join    "filmGenre" as "fg" using ("filmId")
join    "genres" as "g" using ("genreId")
where   "f"."title" = 'Boogie Amelie';
