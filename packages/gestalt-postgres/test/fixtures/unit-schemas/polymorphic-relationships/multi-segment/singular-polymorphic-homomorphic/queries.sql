SELECT landscapes.* FROM landscapes
  JOIN artwork_depicted_landscapes ON
    artwork_depicted_landscapes.depicted_landscape_id = landscapes.id
  WHERE
    artwork_depicted_landscapes.artwork_id = ANY ($1) AND
    artwork_depicted_landscapes.artwork_type = $2;