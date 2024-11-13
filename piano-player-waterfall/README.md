# pianoplayer waterfall

You can enhance your application with additional features that transform it from a basic piano interface into a comprehensive musical learning tool. These extensions build upon the core functionality while introducing more advanced browser APIs and musical concepts.
The goal of these bonus features is to create a more immersive and educational experience, helping users not just play but also learn and understand music.

## Learning Objectives

- Web Animation API for fluid note visualization
- Advanced Audio API techniques (multi-sampling, effects, pedal simulation)
- Canvas API for real-time musical notation
- RequestAnimationFrame for smooth animations
- Performance optimization for real-time graphics

## Abstract

### Enhanced Playback Visualization

Create an engaging visual experience that helps users learn songs:

- Implement a "waterfall" style note animation where upcoming notes fall toward the piano keys
- Notes should be color-coded (e.g., white/black to match key colors)
- Show note duration through the vertical length of the animation
- Provide configurable animation speed that syncs with playback speed
- Include visual indicators for sustained notes
- Display the next 4-8 seconds of upcoming notes

## Context

> Web Audio technology has revolutionized how we teach music online, enabling real-time interaction that was previously only possible with native applications
>
> — Jussi Kalliokoski

### Sustain Pedal

Add sustain pedal functionality (using the space bar)
Visual indicator for when sustain is active
Proper note decay when pedal is released
Support for half-pedaling techniques

### Metronome

Adjustable tempo (40-208 BPM)
Visual metronome indicator
Customizable time signatures (2/4, 3/4, 4/4, 6/8)
Option to hear click track during recording/playback
Count-in feature before recording starts

### Instrument Sounds

Support for multiple instrument samples:

- Piano
- Electric Piano
- Organ

### Real-time instrument switching

Per-recording instrument selection
Proper sound sampling for each instrument

### Musical Notation

Display sheet music for loaded songs
Real-time notation generation for recordings
Support for basic musical symbols:

- Notes and rests
- Time signatures
- Key signatures
- Dynamic markings

Scrolling notation that follows playback
Option to print/export sheet music

### JSON Format Extension

```json
{
  "name": "Enhanced Song",
  "duration": 12500,
  "instrument": "piano",
  "tempo": 120,
  "timeSignature": {
    "beats": 4,
    "value": 4
  },
  "notes": [
    {
      "key": "C4",
      "startTime": 0,
      "duration": 500,
      "velocity": 80,
      "sustained": true
    },
    {
      "key": "E4",
      "startTime": 500,
      "duration": 1000,
      "velocity": 90,
      "sustained": false
    }
  ],
  "pedalEvents": [
    {
      "type": "sustain",
      "startTime": 0,
      "endTime": 750,
      "value": 1.0
    }
  ]
}
```

### Technical Requirements

All features must maintain the same level of responsiveness as the core application
Musical notation should use standard engraving practices
Animation frame rate should maintain 60fps
Sustain pedal must properly handle overlapping notes
Extended features should work across all supported browsers

## Author

This project has been created by:

Aidana Kalakova, Frontend Developer at Doodocs.kz

Contacts:

- Email: kalakova@doodocs.kz
- [GitHub](https://github.com/aidana-bk)
- [LinkedIn](https://www.linkedin.com/in/aidana-kalakova/)
