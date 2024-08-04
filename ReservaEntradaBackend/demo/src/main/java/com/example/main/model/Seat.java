package com.example.main.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;


@Entity
@Data
public class Seat implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String seatNumber;
    private String status;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

}