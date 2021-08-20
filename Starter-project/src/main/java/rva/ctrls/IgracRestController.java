package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Igrac;
import rva.jpa.Liga;
import rva.jpa.Tim;
import rva.repository.IgracRepository;
import rva.repository.LigaRepository;
import rva.repository.TimRepository;

@CrossOrigin
@RestController
@Api(tags = {"Igrac CRUD operacije"})
public class IgracRestController {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private IgracRepository igracRepository;
	
	@Autowired
	private TimRepository timRepository;
	
	@GetMapping("igrac")
	@ApiOperation(value = "Vraca kolekciju svih igraca iz baze podataka")
	public Collection<Igrac> getIgraci() {
		return igracRepository.findAll();
	}
	
	@GetMapping("igrac/{id}")
	public Igrac getIgrac(@PathVariable("id") Integer id) {
		return igracRepository.getOne(id);
	}
	
	@GetMapping("igracTim/{id}")
	public Collection<Igrac> getIgracByTim(@PathVariable("id") Integer id){
		Tim t = timRepository.getOne(id);
		return igracRepository.findByTim(t);
	}
	
	@GetMapping("igracIme/{ime}")
	public Collection<Igrac> getIgracbyIme(@PathVariable("ime") String ime) {
		return igracRepository.findByImeContainingIgnoreCase(ime);
	}
	
	@PostMapping("igrac")
	public ResponseEntity<Igrac> InsertIgrac(@RequestBody Igrac igrac) {
		if(! igracRepository.existsById(igrac.getId())) {
			igracRepository.save(igrac);
			return new ResponseEntity<Igrac>(HttpStatus.OK);
		}
		return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("igrac")
	public ResponseEntity<Igrac> updateIgrac(@RequestBody Igrac igrac) {
		if(!igracRepository.existsById(igrac.getId())) {
			return new ResponseEntity<Igrac>(HttpStatus.NO_CONTENT);
		}
		igracRepository.save(igrac);
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}
	
	@DeleteMapping("igrac/{id}")
	public ResponseEntity<Igrac> deleteIgrac(@PathVariable("id") Integer id) {
		if(!igracRepository.existsById(id)) {
			return new ResponseEntity<Igrac>(HttpStatus.NO_CONTENT);
		}
		igracRepository.deleteById(id);
		if(id == -100) {
			jdbcTemplate.execute(
					"INSERT INTO \"igrac\"(\"id\", \"ime\", \"prezime\", \"broj_reg\", \"datum_rodjenja\", \"nacionalnost\", \"tim\") "
							+ "VALUES (-100, 'ImeTest', 'PrezimeTest', '11', '2001-02-02',1, 1)"
			);
		}
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}
}
