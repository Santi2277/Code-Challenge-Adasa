package com.meteo.codechallenge.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.meteo.codechallenge.entity.MeteoStation;

@RepositoryRestResource(path = "meteoStations")
@CrossOrigin("http://localhost:4200")
public interface MeteoStationRepository extends JpaRepository<MeteoStation, Long> {

}
