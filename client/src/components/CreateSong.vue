<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <v-container>
          <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title">
          </v-text-field>
          <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="song.artist">
          </v-text-field>
          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album">
          </v-text-field>
          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="song.genre">
          </v-text-field>
          <v-text-field
            label="Album Image Url"
            required
            :rules="[required]"
            v-model="song.albumImageUrl">
          </v-text-field>
          <v-text-field
            label="Youtube ID"
            required
            :rules="[required]"
            v-model="song.YoutubeId">
          </v-text-field>
        </v-container>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure">
        <v-text-field
          label="Tab"
          required
          :rules="[required]"
          v-model="song.tab">
          multi-line
        </v-text-field>
        <v-text-field
          label="Lyrics"
          required
          :rules="[required]"
          v-model="song.lyrics">
        </v-text-field>
      </panel>
      <span class="error" v-if="error">
        {{error}}
      </span>
      <v-btn
        color="cyan"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        YoutubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
        this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
