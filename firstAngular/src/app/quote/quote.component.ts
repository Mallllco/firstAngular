import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quote =
    "What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?";
  name = 'Angie Thomas';

  constructor() {}

  ngOnInit(): void {}
}
