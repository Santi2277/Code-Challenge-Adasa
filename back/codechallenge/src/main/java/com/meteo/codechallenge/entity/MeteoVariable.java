package com.meteo.codechallenge.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.meteo.codechallenge.entity.MeteoVariable;
import lombok.Data;

@Entity(name="MeteoVariable")
@Table(name="tbl_mast_meteo_variables")
@Data
public class MeteoVariable {

	@Id
    @Column(name = "id")
    private Integer id;
	
	@Column(name = "name")
    private String name;
	
	@Column(name = "unit")
    private String unit;
	
}
