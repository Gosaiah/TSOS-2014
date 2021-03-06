/* ------------
Globals.ts
Global CONSTANTS and _Variables.
(Global over both the OS and Hardware Simulation / Host.)
This code references page numbers in the text book:
Operating System Concepts 8th edition by Silberschatz, Galvin, and Gagne.  ISBN 978-0-470-12872-5
------------ */
//
// Global "CONSTANTS" (There is currently no const or final or readonly type annotation in TypeScript.)
// TODO: Make a global object and use that instead of the "_" naming convention in the global namespace.
//
<<<<<<< HEAD
<<<<<<< HEAD
var APP_NAME: string    = "BasedOS";   // 'if the basedGod needed an OS, is would be this #rare #thankyoubasedgod
var APP_VERSION: string = "8.17"; // The most #rare day all year...the birthday of the BasedGOD right?
=======
var APP_NAME = "CakeOS";
var APP_VERSION = "10.07";
var STATUS = "Type command: <status> to make a status";
>>>>>>> Test
=======
var APP_NAME = "BasedOS";
var APP_VERSION = "10.13.3";
var STATUS = "Type command: <status> to make a status";
var statusCanvas = null;
var myStatus = null;
>>>>>>> Test

var CPU_CLOCK_INTERVAL = 100;

var TIMER_IRQ = 0;

// NOTE: The timer is different from hardware/host clock pulses. Don't confuse these.
var KEYBOARD_IRQ = 1;

//
// Global Variables
//
//var _PArray = new Array<TSOS.PCB>(); // the Processes
var _CPU;

var _OSclock = 0;

var _Mode = 0;

var _Canvas = null;
var _DrawingContext = null;
var _DefaultFontFamily = "sans";
var _DefaultFontSize = 13;
var _FontHeightMargin = 4;

var _Trace = true;

// The OS Kernel and its queues.
var _Kernel;
var _KernelInterruptQueue = null;
var _KernelBuffers = null;
var _KernelInputQueue = null;

var _Memory;
var _MemoryManager;

// Standard input and output
var _StdIn = null;
var _StdOut = null;

// UI
var _Console;
var _OsShell;

// At least this OS is not trying to kill you. (Yet.)
var _SarcasticMode = false;

// Global Device Driver Objects - page 12
var _krnKeyboardDriver = null;

var _hardwareClockID = null;

// For testing...
var _GLaDOS = null;
var Glados = null;

var onDocumentLoad = function () {
    TSOS.Control.hostInit();
};
