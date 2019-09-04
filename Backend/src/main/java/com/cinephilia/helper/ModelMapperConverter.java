package com.cinephilia.helper;

import org.modelmapper.ModelMapper;

import com.cinephilia.dto.CinephiliaDTO;
import com.cinephilia.persistence.entity.CinephiliaEntity;



public final class ModelMapperConverter {

	static ModelMapper modelMapper = new ModelMapper();

	private ModelMapperConverter() {
	}

	public static <T extends CinephiliaDTO> T convertToDTO(CinephiliaEntity source, Class<T> clazz) {
		return modelMapper.map(source, clazz);
	}

	public static <T extends CinephiliaEntity> T convertToEntity(CinephiliaDTO source, Class<T> clazz) {
		return modelMapper.map(source, clazz);
	}

}
