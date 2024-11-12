class PianoPlayer {
  constructor() {
    this.audioContext = null;
    this.isRecording = false;
    this.isPlaying = false;
    this.recordingStartTime = 0;
    this.recordedNotes = [];
    this.activeNotes = new Map();
    this.playbackSpeed = 1;
    this.currentPlayback = null;

    // Initialize frequency map for notes
    this.noteFrequencies = {
      C3: 130.81,
      "C#3": 138.59,
      D3: 146.83,
      "D#3": 155.56,
      E3: 164.81,
      F3: 174.61,
      "F#3": 185.0,
      G3: 196.0,
      "G#3": 207.65,
      A3: 220.0,
      "A#3": 233.08,
      B3: 246.94,
      C4: 261.63,
      "C#4": 277.18,
      D4: 293.66,
      "D#4": 311.13,
      E4: 329.63,
      F4: 349.23,
      "F#4": 369.99,
      G4: 392.0,
      "G#4": 415.3,
      A4: 440.0,
      "A#4": 466.16,
      B4: 493.88,
      C5: 523.25,
      "C#5": 554.37,
      D5: 587.33,
      "D#5": 622.25,
      E5: 659.26,
    };

    // Keyboard mapping
    this.keyboardMap = {
      q: "C3",
      2: "C#3",
      w: "D3",
      3: "D#3",
      e: "E3",
      r: "F3",
      5: "F#3",
      t: "G3",
      6: "G#3",
      y: "A3",
      7: "A#3",
      u: "B3",
      i: "C4",
      9: "C#4",
      o: "D4",
      0: "D#4",
      p: "E4",
      z: "F4",
      s: "F#4",
      x: "G4",
      d: "G#4",
      c: "A4",
      f: "A#4",
      v: "B4",
      b: "C5",
      h: "C#5",
      n: "D5",
      j: "D#5",
      m: "E5",
    };

    this.initializeDOM();
    this.setupEventListeners();
  }

  initializeDOM() {
    // Cache DOM elements
    this.elements = {
      modeBtns: document.querySelectorAll(".mode-btn"),
      interactiveControls: document.querySelector(".interactive-controls"),
      preparedControls: document.querySelector(".prepared-controls"),
      recordBtn: document.getElementById("recordBtn"),
      stopRecordBtn: document.getElementById("stopRecordBtn"),
      downloadBtn: document.getElementById("downloadBtn"),
      playBtn: document.getElementById("playBtn"),
      pauseBtn: document.getElementById("pauseBtn"),
      stopBtn: document.getElementById("stopBtn"),
      speedRange: document.getElementById("speedRange"),
      speedValue: document.getElementById("speedValue"),
      songInput: document.getElementById("songInput"),
      recordingStatus: document.getElementById("recordingStatus"),
      playbackStatus: document.getElementById("playbackStatus"),
      currentSong: document.getElementById("currentSong"),
      piano: document.getElementById("piano"),
      keys: document.querySelectorAll(".white-key, .black-key"),
    };
  }

  setupEventListeners() {
    // Initialize audio context on first interaction
    document.addEventListener(
      "click",
      () => {
        if (!this.audioContext) {
          this.audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();
        }
      },
      { once: true }
    );

    // Mode switching
    this.elements.modeBtns.forEach((btn) => {
      btn.addEventListener("click", () => this.switchMode(btn.dataset.mode));
    });

    // Piano keyboard events
    this.elements.keys.forEach((key) => {
      key.addEventListener("mousedown", () => this.playNote(key.dataset.note));
      key.addEventListener("mouseup", () => this.stopNote(key.dataset.note));
      key.addEventListener("mouseleave", () => this.stopNote(key.dataset.note));
    });

    // Computer keyboard events
    document.addEventListener("keydown", (e) => {
      if (!e.repeat && this.keyboardMap[e.key]) {
        this.playNote(this.keyboardMap[e.key]);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (this.keyboardMap[e.key]) {
        this.stopNote(this.keyboardMap[e.key]);
      }
    });

    // Recording controls
    this.elements.recordBtn.addEventListener("click", () =>
      this.startRecording()
    );
    this.elements.stopRecordBtn.addEventListener("click", () =>
      this.stopRecording()
    );
    this.elements.downloadBtn.addEventListener("click", () =>
      this.downloadRecording()
    );

    // Playback controls
    this.elements.songInput.addEventListener("change", (e) => this.loadSong(e));
    this.elements.playBtn.addEventListener("click", () => this.startPlayback());
    this.elements.pauseBtn.addEventListener("click", () =>
      this.pausePlayback()
    );
    this.elements.stopBtn.addEventListener("click", () => this.stopPlayback());
    this.elements.speedRange.addEventListener("input", (e) => {
      this.playbackSpeed = parseFloat(e.target.value);
      this.elements.speedValue.textContent = `${this.playbackSpeed}x`;
    });
  }

  switchMode(mode) {
    this.elements.modeBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    if (mode === "interactive") {
      this.elements.interactiveControls.classList.remove("hidden");
      this.elements.preparedControls.classList.add("hidden");
      this.stopPlayback();
    } else {
      this.elements.interactiveControls.classList.add("hidden");
      this.elements.preparedControls.classList.remove("hidden");
      this.stopRecording();
    }
  }

  playNote(note) {
    if (!this.audioContext) return;

    // Create oscillator and gain nodes
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(
      this.noteFrequencies[note],
      this.audioContext.currentTime
    );

    gainNode.gain.setValueAtTime(0.5, this.audioContext.currentTime);
    gainNode.gain.setTargetAtTime(0, this.audioContext.currentTime + 0.1, 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    oscillator.start();

    // Store active note
    this.activeNotes.set(note, { oscillator, gainNode });

    // Highlight key
    const key = document.querySelector(`[data-note="${note}"]`);
    if (key) key.classList.add("active");

    // Record note if recording
    if (this.isRecording) {
      const noteEvent = {
        note: note,
        startTime: Date.now() - this.recordingStartTime,
        endTime: null,
      };
      this.recordedNotes.push(noteEvent);
    }
  }

  stopNote(note) {
    const activeNote = this.activeNotes.get(note);
    if (activeNote) {
      const { oscillator, gainNode } = activeNote;
      gainNode.gain.setValueAtTime(
        gainNode.gain.value,
        this.audioContext.currentTime
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        this.audioContext.currentTime + 0.03
      );
      oscillator.stop(this.audioContext.currentTime + 0.03);
      this.activeNotes.delete(note);

      // Remove key highlight
      const key = document.querySelector(`[data-note="${note}"]`);
      if (key) key.classList.remove("active");

      // Update recording if active
      if (this.isRecording) {
        const noteEvent = this.recordedNotes.find(
          (event) => event.note === note && event.endTime === null
        );
        if (noteEvent) {
          noteEvent.endTime = Date.now() - this.recordingStartTime;
        }
      }
    }
  }

  startRecording() {
    this.isRecording = true;
    this.recordingStartTime = Date.now();
    this.recordedNotes = [];
    this.elements.recordBtn.disabled = true;
    this.elements.stopRecordBtn.disabled = false;
    this.elements.recordingStatus.classList.remove("hidden");
  }

  stopRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.elements.recordBtn.disabled = false;
      this.elements.stopRecordBtn.disabled = true;
      this.elements.downloadBtn.disabled = false;
      this.elements.recordingStatus.classList.add("hidden");
    }
  }

  downloadRecording() {
    const recording = {
      name: `Recording ${new Date().toLocaleString()}`,
      duration: this.recordedNotes[this.recordedNotes.length - 1]?.endTime || 0,
      notes: this.recordedNotes,
    };

    const blob = new Blob([JSON.stringify(recording, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "piano-recording.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  loadSong(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const song = JSON.parse(e.target.result);
          this.currentPlayback = song;
          this.elements.currentSong.textContent = song.name;
          this.elements.playBtn.disabled = false;
          this.elements.stopBtn.disabled = false;
        } catch (error) {
          console.error("Error parsing song file:", error);
        }
      };
      reader.readAsText(file);
    }
  }

  startPlayback() {
    if (!this.currentPlayback || this.isPlaying) return;

    this.isPlaying = true;
    this.elements.playBtn.disabled = true;
    this.elements.pauseBtn.disabled = false;
    this.elements.playbackStatus.classList.remove("hidden");

    const playNote = (note, duration) => {
      this.playNote(note);
      setTimeout(() => this.stopNote(note), duration);
    };

    this.currentPlayback.notes.forEach((note) => {
      const adjustedStartTime = note.startTime / this.playbackSpeed;
      const duration = (note.endTime - note.startTime) / this.playbackSpeed;
      setTimeout(() => playNote(note.note, duration), adjustedStartTime);
    });

    // Stop playback after all notes are played
    setTimeout(() => {
      this.stopPlayback();
    }, this.currentPlayback.duration / this.playbackSpeed);
  }

  pausePlayback() {
    this.isPlaying = false;
    this.elements.playBtn.disabled = false;
    this.elements.pauseBtn.disabled = true;
    // Clear all active notes
    this.activeNotes.forEach((note, key) => this.stopNote(note));
  }

  stopPlayback() {
    this.isPlaying = false;
    this.elements.playBtn.disabled = false;
    this.elements.pauseBtn.disabled = true;
    this.elements.playbackStatus.classList.add("hidden");
    // Clear all active notes
    this.activeNotes.forEach((note, key) => this.stopNote(key));
  }
}

// Initialize the piano player when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new PianoPlayer();
});
