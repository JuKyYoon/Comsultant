package com.comsultant.domain.product.repository;

import com.comsultant.domain.product.entity.Hdd;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HddRepository extends JpaRepository<Hdd, Long> {
    @Override
    Optional<Hdd> findById(Long aLong);
}