import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AiToolService } from '../../services/ai-tool.service';

@Component({
  imports: [RouterLink],
  selector: 'app-ai-tool-details',
  styleUrl: './ai-tool-details.scss',
  templateUrl: './ai-tool-details.html',
})
export class AiToolDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly aiToolService = inject(AiToolService);

  readonly tool = this.aiToolService
    .getTools()
    .find((item) => item.id === Number(this.route.snapshot.paramMap.get('id')));
}
