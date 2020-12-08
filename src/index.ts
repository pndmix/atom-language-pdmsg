import AutocompleteProvider from './autocomplete-provider';

export function getProvider(): AutocompleteProvider {
  return new AutocompleteProvider();
}
