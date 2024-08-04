package com.example.main.service;

import com.example.main.model.Event;
import com.example.main.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    // Obtener todos los eventos
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Obtener un evento por su ID
    public Event getEventById(Long id) {
        Optional<Event> event = eventRepository.findById(id);
        return event.orElse(null);
    }

    // Crear un nuevo evento
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    // Actualizar un evento existente
    public Event updateEvent(Long id, Event event) {
        if (eventRepository.existsById(id)) {
            event.setId(id);
            return eventRepository.save(event);
        }
        return null;
    }

    // Eliminar un evento
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
