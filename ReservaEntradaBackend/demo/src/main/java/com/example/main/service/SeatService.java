package com.example.main.service;

import com.example.main.model.Seat;
import com.example.main.repository.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeatService {

    @Autowired
    private SeatRepository seatRepository;

    // Obtener todos los asientos
    public List<Seat> getAllSeats() {
        return seatRepository.findAll();
    }

    // Obtener un asiento por su ID
    public Seat getSeatById(Long id) {
        Optional<Seat> seat = seatRepository.findById(id);
        return seat.orElse(null);
    }

    // Crear un nuevo asiento
    public Seat createSeat(Seat seat) {
        return seatRepository.save(seat);
    }

    // Actualizar un asiento existente
    public Seat updateSeat(Long id, Seat seat) {
        if (seatRepository.existsById(id)) {
            seat.setId(id);
            return seatRepository.save(seat);
        }
        return null;
    }

    // Eliminar un asiento
    public void deleteSeat(Long id) {
        seatRepository.deleteById(id);
    }
}
