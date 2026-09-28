import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiToolService } from '../../services/ai-tool.service';

@Component({
  imports: [RouterLink],
  selector: 'app-ai-tools',
  styleUrl: './ai-tools.scss',
  templateUrl: './ai-tools.html',
})
export class AiTools {
  readonly tools = inject(AiToolService).getTools();
  readonly categories = ['All', 'Writing', 'Image', 'Video', 'Coding', 'Productivity'];

  searchTerm = '';
  selectedCategory = 'All';

  get filteredTools() {
    const search = this.searchTerm.trim().toLocaleLowerCase();

    return this.tools.filter((tool) => {
      const matchesCategory =
        this.selectedCategory === 'All' || tool.category === this.selectedCategory;
      const matchesSearch =
        !search ||
        [tool.name, tool.description, tool.category].some((value) =>
          value.toLocaleLowerCase().includes(search),
        );

      return matchesCategory && matchesSearch;
    });
  }

  updateSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
