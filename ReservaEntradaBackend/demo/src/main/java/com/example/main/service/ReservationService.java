package com.example.main.service;

import com.example.main.model.Reservation;
import com.example.main.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    // Obtener todas las reservas
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // Obtener una reserva por su ID
    public Reservation getReservationById(Long id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        return reservation.orElse(null);
    }

    // Crear una nueva reserva
    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    // Actualizar una reserva existente
    public Reservation updateReservation(Long id, Reservation reservation) {
        if (reservationRepository.existsById(id)) {
            reservation.setId(id);
            return reservationRepository.save(reservation);
        }
        return null;
    }

    // Eliminar una reserva
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }
}
