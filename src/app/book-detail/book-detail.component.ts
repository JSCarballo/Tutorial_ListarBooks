import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    // In a real app, you would fetch the book from a service
    this.book = { id: bookId, title: `Book ${bookId}`, author: `Author ${bookId}`, description: 'This is a great book.' };
  }
}
