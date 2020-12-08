import { Point, TextBuffer } from 'atom';
import { Suggestion, SuggestionOption, Provider } from 'autocomplete';
export default class AutocompleteProvider implements Provider {
    selector: string;
    disableForSelector: string;
    getPrefix(editor: TextBuffer, bufferPosition: Point): string;
    inflateSuggestion(replacementPrefix: string, suggestion: Suggestion): Suggestion;
    getSuggestions(option: SuggestionOption): Suggestion[];
}
//# sourceMappingURL=autocomplete-provider.d.ts.map