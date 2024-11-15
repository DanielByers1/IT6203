import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PackingListService, Document } from './packing-list.service';

@Component({
  selector: 'app-packing-list',
  standalone: true,
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class PackingListComponent implements OnInit {
  @Input() country?: string; 
  essentialDocuments: Document[] = [];
  newEssentialItem: string = '';
  editingIndex: number | null = null; 
  editingItem: string = '';

  recommendedItems: string[] = [
    "Travel pillow", "Sunscreen", "Water bottle", "First aid kit",
    "Portable phone charger", "Travel adapter", "Comfortable shoes",
    "Umbrella or raincoat", "Snacks", "Travel guidebook or map"
  ];

  weatherBasedItems: string[] = [
    "Raincoat or waterproof jacket", "Umbrella", "Warm scarf and gloves",
    "Waterproof shoes or boots", "Sweaters or hoodies",
    "Thermal wear for colder months", "Weatherproof backpack", "Windbreaker"
  ];

  constructor(private packingListService: PackingListService) {}

  ngOnInit(): void {
    console.log('PackingListComponent initialized');
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.packingListService.getDocuments().subscribe((documents) => {
      this.essentialDocuments = documents;
    });
  }

  addEssentialItem(): void {
    if (this.newEssentialItem.trim()) {
      this.packingListService.addDocument(this.newEssentialItem.trim()).subscribe((document) => {
        this.essentialDocuments.push(document);
        this.newEssentialItem = '';
      });
    }
  }

  removeEssentialItem(index: number): void {
    const document = this.essentialDocuments[index];
    if (document._id) {
      this.packingListService.deleteDocument(document._id).subscribe(() => {
        this.essentialDocuments.splice(index, 1);
      });
    }
  }

  startEditing(index: number): void {
    this.editingIndex = index;
    this.editingItem = this.essentialDocuments[index].item;
  }

  saveEdit(index: number): void {
    const document = this.essentialDocuments[index];
    if (document._id) {
      document.item = this.editingItem;
      this.packingListService.updateDocument(document._id, document.item).subscribe(() => {
        this.editingIndex = null; 
        this.editingItem = ''; 
      });
    }
  }
}
