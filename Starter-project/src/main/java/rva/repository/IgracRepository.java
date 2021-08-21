package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Igrac;
import rva.jpa.Tim;

public interface IgracRepository extends JpaRepository<Igrac, Integer>{

	Collection<Igrac> findByTim(Tim t);
	Collection<Igrac> findByImeContainingIgnoreCase(String ime);
}
