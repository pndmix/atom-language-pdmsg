'use babel';

import suggestions from '../data/autocomplete';

class AutocompleteProvider {
  constructor() {
    this.selector = '.source.rampcode';
    this.disableForSelector = '.source.rampcode .comment';
  }

  getPrefix(editor, bufferPosition) {
    const line = editor.getTextInRange(
      [
        [bufferPosition.row, 0],
        bufferPosition
      ]
    );
    const match = line.match(/\S+$/);
    return match ? match[0] : '';
  }

  inflateSuggestion(replacementPrefix, suggestion) {
    return {
      displayText: suggestion.displayText,
      snippet: suggestion.snippet,
      description: suggestion.description,
      replacementPrefix: replacementPrefix,
      type: suggestion.type,
      rightLabel: suggestion.rightLabel
    };
  }

  getSuggestions({ editor, bufferPosition }) {
    const prefix = this.getPrefix(editor, bufferPosition);

    if (prefix.length < 1) return;

    const matchedSuggestions = suggestions.filter(suggestion => {
      return suggestion.displayText.startsWith(prefix);
    });
    return matchedSuggestions.map(this.inflateSuggestion.bind(this, prefix));
  }
}

export default new AutocompleteProvider();