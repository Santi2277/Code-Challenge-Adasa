package com.meteo.codechallenge.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.meteo.codechallenge.entity.MeteoStation;
import lombok.Data;

@Entity(name="MeteoStation")
@Table(name="tbl_mast_meteo_stations")
@Data
public class MeteoStation {

	@Id
    @Column(name = "id")
    private Integer id;
	
	@Column(name = "name")
    private String name;
	
	@Column(name = "longitude")
    private Double longitude;
	
	@Column(name = "latitude")
    private Double latitude;
	
}
